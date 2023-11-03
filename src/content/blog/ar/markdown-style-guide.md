---
title: "Markdown دليل أسلوب"
description: "فيما يلي عينة من بعض قواعد Markdown الأساسية التي يمكن استخدامها عند كتابة محتوى Markdown في Astro."
pubDate: "Jul 01 2022"
heroImage: "/portfolio/blog-placeholder-1.jpg"
---

فيما يلي عينة من بعض قواعد Markdown الأساسية التي يمكن استخدامها عند كتابة محتوى Markdown في Astro.

## Headings

تمثل عناصر HTML التالية `<h1>`—`<h6>` ستة مستويات من عناوين الأقسام. `<h1>` هو أعلى مستوى للقسم بينما `<h6>` هو المستوى الأدنى.

# H1

## H2

### H3

#### H4

##### H5

###### H6

## Paragraph

زيروم، الذي أستطيع أن أشرح معه من يتألم. وإذا جئتك وأنا ممتلئة سرورا أتألم أو أولد أو أكون أحمقا، فإن الذي آلمني بلذتي فهو خبير بالأشياء أو بما مزقه. ويتمزق، وتتمزق إرادته، وكأنه أهل للستر، فهل يذهب إلى القلب ويتبع نفس الأشياء بنفس القلب؟ ولماذا يرتفع المسام وهو يوضع في مكان لا يعرف فيه إرادة الفأر ولا كل شيء؟ سأكون هادئا. على كل حال، قلبي مضطرب بطريقة أو بأخرى، فأمزقهم وأجففهم، حتى أتمكن من قتلهم أو هروبهم. إنه يكره الحقيقة، التي موجة هي السبب والوجه نفسه، أنت في وضع آلام الطبعة.

هل هو السفر؟ لأن هناك بعض الأشياء التي تكرهها أو تكرهها في أمر كل منها، ستأكل حتى لا تدع ذكائك يخفي حقيقة أن القلب والقلب أو ما هو مضحك سيخرج منه.

## Images

#### Syntax

```markdown
![Alt text](./full/or/relative/path/of/image)
```

#### Output

![blog placeholder](/portfolio/blog-placeholder-about.jpg)

## Blockquotes

يمثل عنصر الاقتباس الشامل المحتوى المقتبس من مصدر آخر، اختياريًا مع الاقتباس الذي يجب أن يكون ضمن عنصر "التذييل" أو "الاستشهاد"، واختياريًا مع التغييرات المضمنة مثل التعليقات التوضيحية والاختصارات.

### Blockquote without attribution

#### Syntax

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.
```

#### Output

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.  
> **Note** that you can use _Markdown syntax_ within a blockquote.

### Blockquote with attribution

#### Syntax

```markdown
> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>
```

#### Output

> Don't communicate by sharing memory, share memory by communicating.<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.

## Tables

#### Syntax

```markdown
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
```

#### Output

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## Code Blocks

#### Syntax

we can use 3 backticks ``` in new line and write snippet and close with 3 backticks on new line and to highlight language specific syntac, write one word of language name after first 3 backticks, for eg. html, javascript, css, markdown, typescript, txt, bash

````markdown
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```
````

Output

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## List Types

### Ordered List

#### Syntax

```markdown
1. First item
2. Second item
3. Third item
```

#### Output

1. First item
2. Second item
3. Third item

### Unordered List

#### Syntax

```markdown
- List item
- Another item
- And another item
```

#### Output

- List item
- Another item
- And another item

### Nested list

#### Syntax

```markdown
- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese
```

#### Output

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Other Elements — abbr, sub, sup, kbd, mark

#### Syntax

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
```

#### Output

<abbr title="Graphics Interchange Format">GIF</abbr> is a bitmap image format.

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> to end the session.

Most <mark>salamanders</mark> are nocturnal, and hunt for insects, worms, and other small creatures.
