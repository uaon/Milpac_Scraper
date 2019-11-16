var osmosis = require('osmosis');
var fs = require('fs')

function getMemberData() {
    return new Promise((resolve, reject) => {
        let memberData = [];

osmosis
.get('https://7cav.us/rosters')
.find('div.listBlock.rosterName')
.follow('@href', false)
.set({
    Name: '#content > div > div > div.sectionMain.rosterProfileView > div:nth-child(3) > div:nth-child(2) > dl > dd > a',
    'Primary':'#content > div > div > div.sectionMain.rosterProfileView > div:nth-child(3) > div:nth-child(1) > dl > dd',
    Secondaries: [
        osmosis
    .set({
        '1':'//*[@id="content"]/div/div/div[4]/div[4]/dl/dd/ul/li[1]/text()',
        '2':'//*[@id="content"]/div/div/div[4]/div[4]/dl/dd/ul/li[2]/text()',
        '3':'//*[@id="content"]/div/div/div[4]/div[4]/dl/dd/ul/li[3]/text()',
        '4':'//*[@id="content"]/div/div/div[4]/div[4]/dl/dd/ul/li[4]/text()',
        '5':'//*[@id="content"]/div/div/div[4]/div[4]/dl/dd/ul/li[5]/text()',
        '6':'//*[@id="content"]/div/div/div[4]/div[4]/dl/dd/ul/li[6]/text()'
            })
        ]
    })
            .log(console.log)
            .error(console.log)
.data(data => {
    memberData.push(data)
})
.error(err => reject (err))
.done(() => resolve(memberData));
    });

}

getMemberData().then(memberData => {
    let data = JSON.stringify(memberData);
fs.writeFileSync('members.json', data);
});