const logBox=document.getElementById('log-box');
function addLog(t){const p=document.createElement('p');p.textContent=t;logBox.appendChild(p);}
addLog('接続確認…');
setTimeout(()=>addLog('観測者データを取得中…'),800);
setTimeout(()=>addLog('新しい観測者が接続しました：***.***.***.***'),1600);
setTimeout(()=>addLog('Fragmentキーを検証中…'),2400);
setTimeout(()=>addLog('FLDJE-8-12-6-10-4 → 鍵一致'),3200);
setTimeout(()=>addLog('標本室が開きます…'),4000);
