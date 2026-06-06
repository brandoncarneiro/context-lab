import { access, readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules", "dist", "build"]);
const markdownFiles = [];

await walk(root);

const failures = [];
const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const text = await readFile(file, "utf8");
  const directory = path.dirname(file);
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    const href = parseHref(match[1] ?? "");
    if (!href || shouldIgnore(href)) {
      continue;
    }

    const target = href.split("#", 1)[0];
    if (!target) {
      continue;
    }

    const targetPath = path.resolve(directory, decodeURIComponent(target));
    if (!targetPath.startsWith(`${root}${path.sep}`) && targetPath !== root) {
      failures.push(`${relative(file)} links outside repository: ${href}`);
      continue;
    }

    try {
      await access(targetPath);
    } catch {
      failures.push(`${relative(file)} has broken local link: ${href}`);
    }
  }
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Checked ${markdownFiles.length} Markdown files; local links are valid.`);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (!ignoredDirectories.has(entry.name)) {
        await walk(entryPath);
      }
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".md")) {
      markdownFiles.push(entryPath);
    }
  }
}

function parseHref(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith("<") && trimmed.includes(">")) {
    return trimmed.slice(1, trimmed.indexOf(">"));
  }
  return trimmed.split(/\s+/, 1)[0] ?? "";
}

function shouldIgnore(href) {
  return (
    href.startsWith("#") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("data:")
  );
}

function relative(file) {
  return path.relative(root, file);
}
