Where to put real photos:

- Drop your images in this folder (e.g. images/corner-table.jpg).
- Then swap a placeholder gradient for a real photo, for example in
  a journal entry's .cover div:

    <div class="cover">
      <img src="../images/corner-table.jpg" alt="describe the photo here" style="width:100%; height:100%; object-fit:cover;">
    </div>

- Keep photos under ~500KB each if you can (resize/export at ~1600px
  wide) so pages load fast. Any free tool like Squoosh.app works.
- Always fill in a real "alt" description — it's what screen readers
  announce, and what shows if the image fails to load.
