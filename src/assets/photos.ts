const imgList = require.context('./gallery', false, /^(assets).*\.webp$/)
const photoFiles: String[] = imgList.keys()

// const breakpoints: number[] = [2160, 1080, 640, 256, 128];

export const photos = photoFiles.map((file_nm: String) => {
    var tmp = file_nm.split('.')[0].split('_');
    var w: number = parseInt(tmp[tmp.length - 2]);
    var h: number = parseInt(tmp[tmp.length - 1]);
    
    return {
        src: require('../' + file_nm),
        width: parseInt((w / 4).toFixed()),
        height: parseInt((h / 4).toFixed()),
        // srcSet: breakpoints.map((breakpoint) => {
        //     const breakpointHeight: number = Math.round((h / w) * breakpoint);
        //     return {
        //         src: require('../' + file_nm),
        //         width: breakpoint,
        //         height: breakpointHeight
        //     }
        // })
    }
});

const thmbList = require.context('./thumbnail', false, /^(assets).*\.webp$/)
const thumbFiles: String[] = thmbList.keys()

export const thumbs = thumbFiles.map((file_nm: String) => {
    var tmp = file_nm.split('.')[0].split('_');
    var w: number = parseInt(tmp[tmp.length - 2]);
    var h: number = parseInt(tmp[tmp.length - 1]);
    
    return {
        src: require('../' + file_nm),
        width: w,
        height: h
    }
});