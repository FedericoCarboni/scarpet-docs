(function () {
  "use strict";
  var loading = false;
  var index;
  var fuse;
  function onLoad() {
    fuse = new Fuse(index, {
      keys: ["syntax", "contents"],
      includeMatches: true,
    });
  }
  function onError() {
    var errorElement = document.getElementById("search-area-error");
    if (errorElement)
      errorElement.innerHTML =
        '<div class="alert alert-error" role="alert">Could not load search index.</div>';
    index = fuse = void 0;
  }
  function loadSearchIndex() {
    if (loading) return;
    loading = true;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        try {
          index = JSON.parse(xhr.response);
        } catch (e) {
          console.error(e);
        }
        if (index) onLoad();
        else onError();
      }
    };
    xhr.onabort = xhr.ontimeout = xhr.onerror = onError;
    xhr.open("GET", "/index.json", true);
    xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Accept-Charset", "utf-8");
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    try {
      xhr.send();
    } catch (e) {
      console.error(e);
    }
  }
  function onContent() {
    function search() {
      console.log(fuse);
      var text = input.value;
      var results = fuse.search(text);
      console.log(results);
      var length = Math.min(results.length, 6);
      resultArea.innerHTML = "";
      for (var i = 0; i < length; i++) {
        console.log(results[i]);
        var a = document.createElement("a");
        a.href = results[i].item.permalink;
        a.className = "list-group-item list-group-item-action";
        a.innerText = results[i].item.title;
        var p = document.createElement("div");
        p.className = "line-clamp-2";
        p.innerText = results[i].item.contents;
        // console.log(results[i].item.contents)
        a.appendChild(p);
        // newElemen.innerText = results[i].item.contents;
        resultArea.appendChild(a);
      }
    }
    var timeout;
    var resultArea = document.getElementById("search-area-results");
    var input = document.getElementById("search-input");
    input.addEventListener("dragover", loadSearchIndex);
    input.addEventListener("focus", loadSearchIndex);
    input.addEventListener("focus", function () {
      resultArea.classList.add("show");
    });
    var searchArea = document.getElementById("search-area");
    // searchArea.addEventListener("focusout", function () {
    //   resultArea.classList.add("invisible");
    // });
    input.addEventListener("input", function () {
      loadSearchIndex();
      if (!fuse) return;
      if (timeout !== void 0) clearTimeout(timeout);
      timeout = setTimeout(search, 100);
    });
    document.removeEventListener("DOMContentLoaded", onContent);
  }
  document.addEventListener("DOMContentLoaded", onContent);
})();
