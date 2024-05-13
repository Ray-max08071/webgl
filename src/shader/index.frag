 
 // 定义浮点数精度
precision mediump float;

// 定义变量
uniform vec4 u_Color;

void main() {
  // 三原色 红/绿/蓝
  // 内置变量
  vec4 color = u_Color / vec4(255, 255, 255, 1);
  gl_FragColor = color;
}