const Queue = require("better-queue");

// キューの処理
const queue = new Queue((task, cb) => {
  console.log(`Processing task: ${task.name}`);

  // 非同期処理
  setTimeout(() => {
    if (task.name === "Task 2") {
      console.error("An error occurred in Task 2");
      cb(true); // エラーが発生したことを通知
    } else {
      console.log(`Task ${task.name} complete`);
      cb(); // 成功を通知
    }
  }, 1000);
});

// タスクをキューに追加
queue.push({ name: "Task 1" });
queue.push({ name: "Task 2" });
queue.push({ name: "Task 3" });
