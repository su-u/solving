const EPS = 0.0001; // constは定数の定義

function main() {
    var a = 0.0, b = 1.0;  // 初期値

    console.log("x^3 + x - 1 の2分法による数値計算");
    console.log("初期値 a=" + a);
    console.log("初期値 b=" + b);
    var x = nibun(a, b);  // 解
    console.log("近似解 x = " + x);
}

function nibun(a, b) {
    var c;

    do {
        c = (a + b) / 2.0;  // 2分計算
        if ((func_y(c) * func_y(a)) < 0) b = c;  // 式(1.2)
        else a = c;  // 式(1.3)
    } while (Math.abs(a - b) > EPS);  // 収束判別　式(1.4)の変形
    return c;
}