
window.addEventListener('load', ()=>{
    main();
});

//
// start here
//
function main() {
    const canvas = document.querySelector("#My_Canvas");
    //  const my_divA = document.createElement('div');
    // canvas.appendChild(my_divA);
    //draw1(my_divA)
    const my_divB = document.createElement('div');
    my_divB.style.marginTop = '200px';
    my_divB.style.overflowX = 'scroll';
    my_divB.style.overflowY = 'scroll';
    canvas.appendChild(my_divB);
    draw2(my_divB)
    console.log('Drawing')
}

function draw1(main_div){
    main_div.style.background = '#333';
    main_div.style.position = 'relative';
    main_div.style.display = 'block';
    main_div.style.width = 'min(90vw,90vh)';
    main_div.style.height = 'min(70vw,70vh)';
    main_div.style.fontSize = '10%';
    let m_x = 0.5
    let m_y = 0.25
    let t = 50
    let n=1.0;
    let m=1.0;
    let x_init = 40.0;
    let y_init = 10.0;
    addPoint(x_init*m_x, y_init*m_y,main_div, "white");
    let x = 2.0;
    let y = 1.0;
    let x_v = 10.0;
    let y_v = 0.0;
    let sigma = 1.0;
    let P = 0.25;
    let i = 0.0;
    setInterval(()=>{
    n = (Math.random()-0.5)*2.0*sigma*Math.sin(i)
    m = (Math.random()-0.5)*2.0*sigma*Math.sin(i)
    x = x + n + x_v
    x_v = x_v + (x_init-x)*P + n
    y = y + m + y_v
    y_v = y_v + (y_init-y)*P + m
    addPoint(x*m_x, y*m_y, main_div, `rgb(${Math.sin(i)*Math.sin(i)*180},${Math.cos(i)*Math.cos(i)*240},${160*(Math.sin(i)+1.0)/2.0})`)
    i = i + 0.1;
    },t)
}

function draw2(main_div){
    main_div.style.background = '#fff';
    main_div.style.position = 'relative';
    main_div.style.display = 'block';
    main_div.style.width = 'min(90vw,90vh)';
    main_div.style.height = 'min(70vw,70vh)';
    main_div.style.fontSize = '10%';
    let t = 100;
    let m_T = 0.5
    let m_X = 0.25
    let T_init = 0.0;
    let X_init = 1.0;
    let L_init = -0.5;
    addPoint(T_init*m_T, X_init*m_X,main_div, "white");
    let T = T_init;
    let X = X_init;
    let L = L_init;
    let n_X = 0.0;
    let n_L = 0.0;
    let sigma_X = 5.0;
    let sigma_L = 0.1;
    let Pull_L = 1.0;
    let i=2.1;
    setInterval(()=>{
    n_X = (Math.random()-0.5)*2.0*sigma_X
    n_L = (Math.random()-0.5)*2.0*sigma_L
    L = L + n_L + Pull_L*(L_init-L) // mean-reversion
    T = T + Math.exp(L)
    X = X + n_X
    addPoint(T, -X, main_div, `rgb(${Math.sin(i)*Math.sin(i)*180},${Math.cos(i)*Math.cos(i)*240},${160*(Math.sin(i)+1.0)/2.0})`)
    i = i + 0.1;
    // console.log(`${X},${L},${T}`)
    },t)
}

function addRectangle(w,h,x,y,parent, col='#eee'){
    div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.top = '50%'
    div.style.width = `${w}rem`
    div.style.height = `${h}rem`
    div.style.transform = `translate(${x}rem,${y}rem)`
    div.style.background = col
    parent.appendChild(div)
}

function addPoint(x,y,parent, col='#eee'){
    addRectangle(0.5,0.5, x,y, parent, col)
}

