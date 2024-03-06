---
title: BUPT抢课脚本
categories:
  - Notes
  - 花里胡哨
date:
tags:
---

浏览器f12打开控制台运行
```
// ----- 需要配置的参数 -----
/* 需要抢的课程名称, 必修、选修、公选通用, 需要和教务系统上的课程名称完全一致 */
let COURSES = [
  "蛙泳[男]",
];
/* 需要抢的课程分组名称, 必修、选修、公选通用, 可以用于体育专项的抢课, 需要完全一致 */
let COURSE_GROUPS = [
];
/* 抢课间隔, 单位毫秒. 推荐数值: 抢课 100ms, 捡漏 500ms */
let INTERVAL_MS = 1000;
/* 是否开启公选课抢课, 默认关闭, 以防止抢到课程名一样的公选课 */
let ENABLE_GGXXK = false;
// ------------------------

// 以下不需要修改

let mainInterval;
let targetCourses = [];

const start = () => {
  mainInterval = setInterval(handler, INTERVAL_MS);
  console.log("--- start grabbing courses ---");
};

const stop = () => {
  clearInterval(mainInterval);
  console.log("--- stop grabbing courses ---");
};

const handler = () => {
  if (targetCourses.length === 0) {
    getCourses();
  }

  console.log(
    `--- found ${targetCourses.length} courses ---`
  );

  let paths = [
    "/jsxsd/xsxkkc/xxxkOper", // 选修
    "/jsxsd/xsxkkc/bxxkOper", // 必修
  ];
  if (ENABLE_GGXXK) {
    paths.push("/jsxsd/xsxkkc/ggxxkxkOper"); // 公选
  }
  for (let course of targetCourses) {
    for (let path of paths) {
      $.get(path, course, console.log);
    }
  }
};

const getCourses = () => {
  let params = {
    sEcho: 1,
    iColumns: 11,
    iDisplayStart: 0,
    iDisplayLength: 999,
  };
  let paths = [
    "/jsxsd/xsxkkc/xsxkBxxk", // 必修
    "/jsxsd/xsxkkc/xsxkXxxk", // 选修
  ];
  if (ENABLE_GGXXK) {
    paths.push("/jsxsd/xsxkkc/xsxkGgxxkxk"); // 公选
  }
  for (let path of paths) {
    $.post(path, params, (data) => {
      let aaData = $.parseJSON(data).aaData;
      for (let course of aaData) {
        if (COURSES.includes(course.kcmc)) {
          targetCourses.push(course);
        } else if (COURSE_GROUPS.includes(course.fzmc)) {
          targetCourses.push(course);
        }
      }
    });
  }
};

start();
```
