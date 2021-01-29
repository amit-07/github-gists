const pickGistLanguages = (files) => {
    let filesArr = Object.values(files);
    const distinctLanguages = [...new Set(filesArr.map(x => x.language))]
    return distinctLanguages;
}

export {pickGistLanguages};