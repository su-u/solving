const EPS = 0.0001; // 許容誤差

function main() {
    console.log('x^3 + x - 1 のニュートン法による数値計算');

    let a = 1.0;
    console.log('初期値 a=' + a);

    let b = newton(a);

    // ここにニュートン法による演算の主要部分を記述する

    console.log('近似解 x = ' + b);
}

const newton = a => {
    let c;
    let count = 1;
    while (1) {
        c = a - func_y(a) / func_z(a);
        const str = document.createTextNode(`${count}:${c}`);
        const p = document.createElement('p');
        p.appendChild(str);
        output.appendChild(p);
        console.log(c);
        if (Math.abs(a - c) < EPS) break;
        else a = c;

        count += 1;
    }
    return c;
};
