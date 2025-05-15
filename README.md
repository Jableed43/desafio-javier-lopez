## 🚀 Ingertec Challenge: Interactive Web Page & Database Design 🚀

Ingertec presented an exciting challenge, and here's my solution, blending front-end interactivity with back-end database design!

**Explore the Live Demo:** 🔗 [Sitio](https://jableed43.github.io/desafio-javier-lopez/Site/views/index.html)

---

### 💻 Part 1: Dynamic Front-End with HTML, CSS, Bootstrap & AJAX

I built a responsive HTML page from scratch, leveraging the power of Bootstrap 5 to ensure a seamless experience across all devices.

**Key Features Implemented:**

* **Structured Layout:** A clear and organized page with a descriptive title.
* **Image Grid:** Displayed five images neatly in a single row.
* **Descriptive Captions:** Each image is accompanied by a relevant description below it.
* **Interactive Visit Counters:** Each image features a visit counter with an accompanying icon, providing immediate feedback.
* **Modal Image Zoom (Even Clicks):** Clicking on even-numbered images triggers a Bootstrap modal, showcasing a larger version of the image. Importantly, each click on an even image increments its visit counter.
* **Dynamic Popup with Interaction (Odd Clicks):** Clicking on odd-numbered images opens a new browser window (popup) with a specific title and dimensions (800x400). The clicked image dynamically resizes to fill the entire popup.
    * **Interactive Buttons:** The popup includes "OK" and "Cerrar" buttons.
    * **"OK" Action:** Clicking "OK" updates the visit counter of the corresponding odd-numbered image on the main page *without* closing the popup.
    * **"Cerrar" Action:** Clicking "Cerrar" simply closes the popup window.
* **AJAX Content Loading:** A prominent "Cargar Texto" button is placed below the images. Upon clicking, an AJAX call is made to retrieve the "texto" variable from a `home.json` file (simulating a backend endpoint):

```json
{
  "pagina": "home",
  "texto": "este es el texto que debe aparecer en el textarea luego de hacer la llamada ajax"
}
```

The retrieved text is then dynamically populated into a designated textarea on the page.

-----

### ⚙️ Part 2: MySQL Database Design

For the database portion of the challenge, I created a MySQL database named `jableed4320250515` (following the specified naming convention).

* I designed two tables: `tresource_type` and `tresource`.
* The `tresource_type` table includes fields for `idResourceType` (primary key, auto-increment), `created` (datetime), and `descrip` (varchar(200)).
* The `tresource` table includes fields for `idResource` (primary key, auto-increment), `created` (datetime), `descrip` (varchar(200)), and `idResourceType` (foreign key referencing `tresource_type`).
* I populated the `tresource_type` table with the values: 'Vídeo', 'PDF Documentación', 'PDF Enunciado', and 'PDF Solución'.
* I also created at least six entries in the `tresource` table, correctly linking them to the corresponding resource types in `tresource_type`.

-----

This challenge provided a fantastic opportunity to integrate front-end interactivity with fundamental database design principles. I enjoyed tackling each requirement and am excited to showcase the result\!

\#WebDevelopment \#Frontend \#HTML \#CSS \#Bootstrap \#JavaScript \#AJAX \#MySQL \#DatabaseDesign \#Ingertec \#TechnicalChallenge \#FullStackFundamentals
