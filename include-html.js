document.addEventListener("DOMContentLoaded", (t) => {
  document.querySelectorAll("[data-include]").forEach((t) =>
    ((t, e) => {
      const a = new XMLHttpRequest();
      a.addEventListener("readystatechange", (e) => {
        if (4 === a.readyState)
          if (a.status >= 200 && a.status < 300) t.outerHTML = a.responseText;
          else {
            let e =
              a.statusText ||
              "Error loading the file, verify that you are making the request by http or https";
            t.outerHTML = `<div><p>Error ${a.status}: ${e}</p></div>`;
          }
      }),
        a.open("GET", e),
        a.setRequestHeader("Content-type", "text/html; charset=utf-8"),
        a.send();
    })(t, t.getAttribute("data-include"))
  );
});
