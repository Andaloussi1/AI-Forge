const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=__dirname, main={innerHTML:''},sidebar={innerHTML:''},breadcrumb={textContent:''},file={};
const context={console,location:{hash:'#/'},localStorage:{getItem:()=>null,setItem:()=>{}},document:{querySelector:s=>({'#main':main,'#sidebar':sidebar,'#breadcrumb':breadcrumb,'#import':file}[s]||null),querySelectorAll:()=>[]},window:{addEventListener:()=>{}},setTimeout,clearTimeout,URL,Blob};
vm.createContext(context);vm.runInContext(fs.readFileSync(path.join(root,'data.js'),'utf8'),context);vm.runInContext(fs.readFileSync(path.join(root,'app.js'),'utf8'),context);
const run=s=>vm.runInContext(s,context);
assert.equal(run('R.weeks.length'),12);assert.equal(run('R.weeks.flatMap(w=>w.days).length'),84);assert.equal(run('all.length'),226);
assert.equal(run('R.weeks[0].page'),6);assert.equal(run('R.weeks[11].days[6].page'),29);
assert.equal(run('R.projects.length'),3);assert.equal(run('R.projects.every(p=>p.criteria.length>0)'),true);
assert.equal(run('pct(all)'),0);run("state.records[all[0].id]={done:true,minutes:45,repo:'https://example.com/commit',blocker:'Timeout'}");assert.equal(run('current().t'),1);assert.equal(run('minutes(all)'),45);
assert.match(run("checkin(1,1,'day')"),/45 minutes/);assert.match(run("checkin(1,1,'day')"),/Timeout/);assert.match(run("checkin(1,1,'week')"),/CORE ACCEPTANCE GATE/);
for(let w=1;w<=12;w++){assert.match(run(`weekPage(${w})`),/Weekly acceptance gate/);for(let d=1;d<=7;d++)assert.ok(run(`weekPage(${w},${d})`).length>100);}
for(let i=0;i<3;i++)assert.match(run(`projectsPage(${i})`),/Project evidence/);
assert.match(run("esc('<script>')"),/&lt;script&gt;/);assert.throws(()=>run('validate({})'));
run('for(const t of all)state.records[t.id]={done:true}');assert.equal(run('pct(all)'),100);assert.equal(run('current().w'),12);
assert.match(run('taskPage(1,1,0)'),/Daily task record/);assert.match(run('taskPage(13,1,0)'),/Page unavailable/);
console.log('PASS: 12 weeks, 84 days, 226 tasks, source pages, project briefs, all week/day views, progress, time totals, mentor summaries, validation, escaping and completed journey.');
