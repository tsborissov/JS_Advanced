function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const restaurants = {};
      const bestRestaurant = {
         name: '',
         averageSalary: 0,
         bestSalary: 0,
         workers: {}
      };

      for (const element of input) {
         const restaurantName = element.split(' - ')[0];
         const workersData = element.split(' - ')[1].split(', ');

         const workers = {};
         for (let i = 0; i < workersData.length; i++) {
            let [workerName, salary] = workersData[i].split(' ');
            salary = Number(salary);
            workers[workerName] = salary;
         }

         if (restaurants[restaurantName] == undefined) {
            restaurants[restaurantName] = workers;
         } else {
            for (const worker in workers) {
               restaurants[restaurantName][worker] = workers[worker];
            }
         }
      }

      for (const restaurant in restaurants) {
         const workers = restaurants[restaurant];
         let salariesTotal = 0;
         let bestSalary = 0;
         let count = 0;

         for (const worker in workers) {
            count++;
            const currentSalary = workers[worker];
            salariesTotal += currentSalary;
            bestSalary = currentSalary > bestSalary ? currentSalary : bestSalary;
         }

         const averageSalary = salariesTotal / count;

         if (averageSalary > bestRestaurant.averageSalary) {
            bestRestaurant.name = restaurant;
            bestRestaurant.averageSalary = averageSalary;
            bestRestaurant.bestSalary = bestSalary;
            bestRestaurant.workers = workers;
         }
      }

      const bestRestaurantOutput = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      let bestRestaurantWorkersOutput = '';

      let workersOutput = Object.entries(bestRestaurant.workers);
      workersOutput.sort((a, b) => b[1] - a[1]);

      for (const worker of workersOutput) {
         bestRestaurantWorkersOutput += `Name: ${worker[0]} With Salary: ${worker[1]} `
      }

      document.querySelector('#bestRestaurant p').innerText = bestRestaurantOutput;
      document.querySelector('#workers p').innerHTML = bestRestaurantWorkersOutput;
   }
}