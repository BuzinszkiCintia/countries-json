function displayinfo() {
    let name = peru.name.official; //vedd ki ennek a peru listának a 0.elemét (amíg itt volt a [0]), annka a nevét és az official tulajdonságát
    let nameh1 = document.createElement("h1");
    nameh1.textContent = name;
    document.body.append(nameh1);
}
window.addEventListener("load", displayinfo);