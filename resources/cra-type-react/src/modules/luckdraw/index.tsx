import React from 'react';

let rel = [];
const getNum = function (): number {
    const num = parseInt((Math.random() * 10) + '', 10) + 1;
    const name = document.getElementById('name');
    if (!name.value) {
        alert('请输入对应姓名');
        return;
    }
    fetch('/api/luckdraw?name=' + name.value + '&num=' + num).then((res) => {
        return res.json();

    }).then((res) => {
        let ress = res
        rel = [];
        if (res.message) {
            alert(res.message);
            ress = res.obj
        } else {
            alert('恭喜你抽到了 ' + num + ', 结果已经保存！');
        }

        for (let key in ress) {
            rel.push({
                name: key,
                num: ress[key]
            })
        }
        console.log(rel);
        const str = rel.map((item) => {
            return `<p>${item.name}: ${item.num}</p>`;
        })
        document.getElementById('result').innerHTML = '';
        document.getElementById('result').innerHTML = '结果：' + str;

    })
    return num;
}

let na = '';

export default function LuckDraw() {
    return (
        <div>
            姓名： <input id="name" />
            <button onClick={getNum}>抽签</button>

            <div id="result">

            </div>
        </div>
    )
};
