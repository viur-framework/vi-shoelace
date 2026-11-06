---
meta:
  title: Pagination
  description: A Pagination component
layout: component
---

```html:preview
<sl-pagination id='page-btn-DIV' total='2120' page-size='20' value='1'></sl-pagination>
```

## Examples

### Simple Pagination

```html:preview
<sl-pagination id='page-btn-DIV2' total='2120' page-size='20' value='1'></sl-pagination>
<script > 
   let pageBtn=document.querySelector('#page-btn-DIV2');
   pageBtn.simple=true;
</script>
```

### Page Window

Only the first and last pages, the current page and its neighbours get a button; every wider gap is an ellipsis. `boundary-count` and `sibling-count` set how many pages stay visible at the edges and around the current page.

```html:preview
<sl-pagination total="2120" page-size="20" value="53"></sl-pagination>
<sl-pagination total="2120" page-size="20" value="53" boundary-count="2" sibling-count="2"></sl-pagination>
```

### Full Pagination

```html:preview
<sl-pagination id='page-btn-DIV3' total='2120' page-size='20' value='1'></sl-pagination>
<script > 
   let pageBtn=document.querySelector('#page-btn-DIV3');
     pageBtn.showFirst=true; //Show first page shortcut button
     pageBtn.showLast=true; //Show last page shortcut button
     pageBtn.showSizeChange=true; //Show resize paging select
     pageBtn.showPageChange=true; //Show direct jump to a page with an input
</script>
```


