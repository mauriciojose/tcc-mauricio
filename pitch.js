

const A4 = 440
const C0 = A4*Math.pow(2, -4.75)
const notas = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]

function pitch( freq ) {
    let h = Math.round( 12 * Math.log2( freq / C0 ) );

    let octave = Math.floor( h / 12 ) ;

    let n = h % 12;

    return typeof notas[n] == 'undefined' ? "" :  notas[n] + octave.toString();
}

console.log( pitch( 667 ) );