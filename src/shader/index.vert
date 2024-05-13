
// 定义渲染质量
precision mediump float;

// 定义变量

// vec2 表示二维向量
attribute vec2 a_position;
attribute vec2 a_canvas_size;

void main() {
  // 四维向量
  // vector 向量
  // opengl 中只有浮点数这种类型

  vec2 position = a_position / a_canvas_size;
  position = position * 2.0 - 1.0;
  position = position * vec2(1.0, -1.0);

  // 当前变量都是内置变量
  gl_Position = vec4(position, 0.0, 1.0);
  gl_PointSize = 10.0;
}