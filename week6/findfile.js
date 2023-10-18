function findFileExtension(filename) {
    return filename.substring(filename.lastIndexOf('.'))
}
console.log(findFileExtension('sample.ex.jpeg'))

function isImageFileExtension(filename) {
    if(filename === null||filename === undefined)
    //.png, .jpg, .jpeg, .gif, .svg
    return (
        filename.endsWith('.png') ||
        filename.endsWith('.jpg')||
        filename.endsWith('.jpeg') ||
        filename.endsWith('.gif') ||
        filename.endsWith('.svg')
    )
}