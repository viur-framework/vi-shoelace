//import {formatstring} from "./cellRenderer";
//const apiurl=window.location.origin;
const apiurl = "http://localhost:8080";

export function boneEditor(cell: any, onRendered: any, success: any, cancel: any, boneStructure: any, boneName = "", boneValue: any = null): any {

  cell.getRow().getElement().style.height = "auto";
  cell.getRow().getElement().style.overflow = "visible";

  cell.getElement().style.height = "auto"
  cell.getElement().style.overflow = "visible";

  //cell.getRow().getElement().style.overflow = "visible";

  cell._cell.table.element.style.overflow = "visible";
  cell._cell.table.rowManager.element.style.overflow = "visible";


  const bone = document.createElement("sl-bone");
  bone.boneStructure = boneStructure;
  bone.boneValue = cell.getValue();
  bone.boneName = cell.getField();
  bone.renderType = "edit";
  bone.addEventListener("sl-boneChange", (boneChangeEvent) => {

    const skelKey = cell._cell.row.data.key;
    updateData(boneChangeEvent.detail.formData, skelKey);

    success(boneChangeEvent.detail.boneValue);
     cell.getRow()._row.clearCellHeight();
  })
  return bone;


}


function successFunc(cell: any, boneStructure: any, boneName: any, success: any, callSuccess = true) {

  const skelKey = cell._cell.row.data.key;
  const formData = new FormData();

  for (const child of cell.getElement().querySelectorAll("sl-input")) {
    if (boneStructure["multiple"] && boneStructure["languages"] !== null) {
      const tmpBoneName = child.dataset.boneName.split(".");
      formData.append(tmpBoneName.slice(0, tmpBoneName.length - 1).join("."), child.value);
    } else {
      formData.append(child.dataset.boneName, child.value);
    }


  }
  var obj = {}
  for (const key of formData.keys()) {
    let value = formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key);

    if (boneStructure["multiple"] && boneStructure["languages"] === null) {
      if (!Array.isArray(value)) {
        const tmpvalue = [value];
        value = tmpvalue;
      }
    }
    obj = createPath(obj, key, value);
  }

  updateData(formData, skelKey);
  if (callSuccess) {
    success(obj[cell.getField()]);
    cell.getRow()._row.clearCellHeight();
  }


}

function createPath(obj: any, path: any, value = null) {
  path = typeof path === 'string' ? path.split('.') : path;
  let current = obj;
  while (path.length > 1) {
    const [head, ...tail] = path;
    path = tail;

    if (current[head] === undefined) {
      if (Number.isNaN(parseInt(tail[0]))) {
        current[head] = {}
      } else {
        current[head] = []
      }
    }
    current = current[head];


  }


  if (Number.isNaN(parseInt(path[0]))) {
    current[path[0]] = value;
  } else {
    current[parseInt(path[0])] = value;
  }


  return obj;
}

function keyPress(event: KeyboardEvent, successFunc: any, cancelFunc: any, boneName, boneStructure, cell, successFuncPorxy = successFunc) {

  if (event.key === "Enter") {

    successFuncPorxy(cell, boneStructure, boneName, successFunc)
  }

  if (event.key === "Esc") {
    console.log("esc")
    cancelFunc()
  }
}


function updateRelationalBone(searchBox, cell, success) {

  const skelKey = cell._cell.row.data.key;
  const formData = new FormData();
  for (const child of cell.getElement().querySelectorAll("sl-combobox")) {
    formData.append(child.dataset.boneName, child.dataset.boneValue);

  }
  var obj = {}
  for (const key of formData.keys()) {
    let value = formData.getAll(key).length > 1 ? formData.getAll(key) : formData.get(key)
    obj = createPath(obj, key, value)
  }

  updateData(formData, skelKey).then((newBoneData: any) => {
    success(newBoneData["values"][searchBox.dataset.boneName.split(".")[0]])
  });
}

/////////////////HELPER FUNCTRIONS/////////////////
function getSkey() {
  return new Promise((resolve, reject) => {
    fetch(`${apiurl}/json/skey`).then(response => response.json()).then((skey) => {
      resolve(skey)
    })

  })
}

export function updateData(formData: FormData, skelKey: string) {
  return new Promise((resolve, reject) => {
    getSkey().then((skey: string) => {

      formData.append("key", skelKey)
      formData.append("skey", skey)


      fetch(`${apiurl}/json/test/edit`, {
        method: 'POST',
        body: formData
      }).then(resp => resp.json().then(data => resolve(data)))
    });
  });
}

/////////////////FILEBONE FUNCTRIONS/////////////////

function getUploadUrl(file: File) {
  return new Promise((resolve, reject) => {
    getSkey().then(skey => {

      const data: object = {
        "fileName": file.name,
        "mimeType": file.type,
        "size": file.size,
        "skey": skey,
      }
      fetch(`${apiurl}/json/file/getUploadURL`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data).toString()
      }).then(response => response.json()).then((data) => resolve(data))
    })
  });
}

function uploadFile(file, uploadData) {

  return new Promise((resolve, reject) => {
    fetch(uploadData["values"]["uploadUrl"], {
      method: "POST",
      body: file,
      mode: "no-cors",

    }).then(response => {
      resolve(response)
    })
  })

}

function addFile(uploadData, keyinput, inputSpan, file) {

  const currentUpload: any = {}
  return new Promise((resolve, reject) => {
    currentUpload["key"] = uploadData["values"]["uploadKey"];
    currentUpload["node"] = undefined;
    currentUpload["skelType"] = "leaf";
    getSkey().then(skey => {
      currentUpload["skey"] = skey;
      fetch(`${apiurl}/json/file/add`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        mode: "no-cors",
        body: new URLSearchParams(currentUpload).toString(),
      }).then(response => response.json()).then((data) => {
        resolve(data);
      });
    });
  });
}
