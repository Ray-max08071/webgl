
import frag from './shader/index.frag';
import vert from './shader/index.vert';
import { createProgram, createShader, randomColor } from './utils/index';

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
let point = []

// 流程1 创建定点着色器
// 创建对象 传入源代码 开始编译

// gl.VERTEX_SHADER 是opengl的常量
const vertexShader = createShader(gl, gl.VERTEX_SHADER, vert);
const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, frag);
const program = createProgram(gl, vertexShader, fragmentShader);

gl.useProgram(program);

// 获取变量

const a_position = gl.getAttribLocation(program, 'a_position');
const a_canvas_size = gl.getAttribLocation(program, 'a_canvas_size');
const u_Color = gl.getUniformLocation(program, 'u_Color');

// 赋值
gl.vertexAttrib2f(a_canvas_size, canvas.width, canvas.height)

// 鼠标点击canvas 随机生成一个点
canvas.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  point.push({
    x,
    y,
    color: randomColor()
  })

  gl.clearColor(0, 0, 0, 1);
  // 设置默认值为黑色
  gl.clear(gl.COLOR_BUFFER_BIT);

  for (let i = 0; i < point.length; i++) {
    const color = point[i].color;
    gl.vertexAttrib2f(a_position, point[i].x, point[i].y);
    gl.uniform4f(u_Color, color.r, color.g, color.b, color.a);
    gl.drawArrays(gl.POINTS, 0, 1);
  }

})
// 流程4 绘制
gl.clearColor(0, 0, 0, 1);
// 设置默认值为黑色
gl.clear(gl.COLOR_BUFFER_BIT);