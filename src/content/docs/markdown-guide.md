---
title: Markdown Guide
description: Comprehensive guide to Markdown syntax, formatting options, and best practices
date: 2024-04-24
---

# Markdown Guide 📝

This guide covers the most commonly used markdown syntax and formatting options.

## Headers

```markdown
# H1

## H2

### H3

#### H4

##### H5

###### H6
```

## Text Formatting

```markdown
_Italic text_ or _Italic text_
**Bold text** or **Bold text**
**_Bold and italic_** or **_Bold and italic_**
~~Strikethrough text~~
```

## Lists

### Unordered Lists

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

* Alternative bullet

- Another alternative
```

### Ordered Lists

```markdown
1. First item
2. Second item
3. Third item
   1. Subitem 3.1
   2. Subitem 3.2
```

## Links

```markdown
[Link text](https://example.com)
[Link with title](https://example.com 'Title text')
[Reference-style link][reference]

[reference]: https://example.com
```

## Images

```markdown
![Alt text](image.jpg)
![Alt text with title](image.jpg 'Title text')
![Reference-style image][image-ref]

[image-ref]: image.jpg
```

## Code

### Inline Code

```markdown
Use `backticks` for inline code.
```

### Code Blocks

````markdown
```language
// Code block with syntax highlighting
function example() {
  return "Hello, world!";
}
```
````

## Blockquotes

```markdown
> This is a blockquote
>
> > This is a nested blockquote
```

## Horizontal Rules

```markdown
---
---

---
```

## Tables

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

## Task Lists

```markdown
- [ ] Unchecked task
- [x] Checked task
```

## Escaping Characters

```markdown
\* This is not italic \*
\# This is not a header
```

## HTML

You can use HTML tags when you need more control:

```markdown
<div style="color: blue;">
  This is <span style="color: red;">colored</span> text.
</div>
```

## Footnotes

```markdown
Here's a sentence with a footnote[^1].

[^1]: This is the footnote.
```

## Emoji

```markdown
:smile: :heart: :rocket:
```

## Best Practices

1. Use consistent heading levels
2. Keep line length reasonable (around 80 characters)
3. Use meaningful link text
4. Add alt text to images
5. Use code blocks for code snippets
6. Keep tables simple and readable
7. Use lists for sequential information
8. Use blockquotes for quoted content
9. Use horizontal rules sparingly
10. Preview your markdown before publishing

## Common Markdown Flavors

- **GitHub Flavored Markdown (GFM)**: Adds tables, task lists, and more
- **CommonMark**: A strongly specified version of markdown
- **Markdown Extra**: Adds features like tables, footnotes, and more

## Tools

- [Markdown Preview](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - VS Code extension
- [Dillinger](https://dillinger.io/) - Online markdown editor
- [StackEdit](https://stackedit.io/) - Online markdown editor
- [Markdown Guide](https://www.markdownguide.org/) - Comprehensive markdown reference
