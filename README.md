  <div class="wrapper" data-tilt>
    <h1>Element Buff</h1>
    <hr />
    <div class="container">
      <p>
        A library of common business components based on Element, adapted to the use of vue2.0 projects. Simple, efficient, and reusable. It is convenient for front-end developers to develop business quickly.
      </p>
      <hr />
      <p>
        一个基于Element 的常用业务组件库，适配vue2.0项目使用。简单，高效，复用性强。方便前端开发人员快速开发业务。
      </p>
    </div>
  </div>

  <style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 2rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

body h1 {
  margin-top: 80px;
  text-align: center;
  font-weight: 600;
}
body hr {
  width: 50px;
  border: none;
  border-bottom: 1px solid rgba(119, 119, 119, 0.25);
}
.container {
  width: 80%;
  margin: 1rem auto;
  padding: 2rem;
  text-align: justify;
  transition: all 0.3s;
}
.container p {
  line-height: 1.5;
  letter-spacing: 0.3px;
  word-spacing: 2px;
}

.container p:first-child::first-letter {
  color: #fe5f55;
  font-weight: bold;
  font-size: 70px;
  float: left;
  line-height: 60px;
  padding-right: 8px;
  margin-top: -3px;
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 1rem;
  }
}
</style>

