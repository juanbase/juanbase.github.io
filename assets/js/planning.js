const timeFormat = 'DD-MM-YYYY HH:mm:ss';

const currentDay = Number(moment().format('D'));

const learningEnglishDay = 0;

const articlesNum = 0;

const articlesNumGoal = 1;

const startDateFulltimeSalary = moment('10-05-2021 00:00:00', timeFormat).dayOfYear();
const endDateFulltimeSalary = moment('10-06-2021 00:00:00', timeFormat).dayOfYear();

document.addEventListener('DOMContentLoaded', () => {
  const plans = [
    {
      time: '30-06-2021 23:59:59',
      name: 'Học tiếng Anh',
      done: `${learningEnglishDay}/30`,
      pri: 3,
    },
    {
      time: '20-06-2021 23:59:59',
      name: 'Lương part-time',
      done: '260/750',
      pri: 4,
    },
    {
      time: '10-06-2021 23:59:59',
      name: 'Lương full time',
      done: `${moment().dayOfYear() - startDateFulltimeSalary}/${endDateFulltimeSalary - startDateFulltimeSalary}`,
      pri: 4,
    },
    {
      time: '30-06-2021 23:59:59',
      name: 'Trị mụn',
      done: `${(moment().week() - moment().startOf('M').week())}/4`,
      pri: 5,
    },
    {
      time: '19-06-2021 00:00:00',
      name: 'Làm biển số',
      done: `${currentDay - 1}/19`,
      pri: 5,
    },
    {
      time: '26-06-2021 05:00:00',
      name: 'Đi Vũng Tàu',
      done: `${currentDay - 1}/26`,
      pri: 5,
    },
    {
      time: '30-06-2021 23:59:59',
      name: 'Học nhào lộn',
      done: `${currentDay - 1}/30`,
      pri: 3,
    },
    {
      time: '30-06-2021 23:59:59',
      name: 'Học Guitar',
      done: `${currentDay - 1}/30`,
      pri: 3,
    },
    {
      time: '30-06-2021 23:59:59',
      name: 'Học nhảy',
      done: `${currentDay - 1}/30`,
      pri: 3,
    },
    {
      time: '30-06-2021 23:59:59',
      name: 'Viết blogs',
      done: `${articlesNum}/${articlesNumGoal}`,
      pri: 5,
    },
  ];

  const planningSorted = _.sortBy(plans, ['pri', 'time', 'name']);

  const tbodyPlanning = document.getElementById('planning-data-body');

  const planningTemplate = planningSorted.map(p => {
    const tr = document.createElement('tr');

    const tdTime = createContents('td', p.time);
    const tdName = createContents('td', p.name);
    const tdProgress = document.createElement('td');
    const [done, goal] = p.done.split('/');

    const per = Math.floor(Number(done)*100/Number(goal));

    tdProgress.innerHTML = `
      <div>${per}%</div>
      <div class="progress">
        <div class="determinate" style="width: ${per}%"></div>
      </div>
    `
    tr.appendChild(tdTime);
    tr.appendChild(tdName);
    tr.appendChild(tdProgress);

    return tr;
  });

  for (const tr of planningTemplate) {
    tbodyPlanning.appendChild(tr);
  }
});
