import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
)

const Skills = () => {
    const fData = {
        // front-end
        labels: ['HTML/CSS', 'JavaScript', 'Vue.js', 'React/TypeScript', 'WordPress', 'CSS FW'],
        datasets: [
            {
                label: 'フロントエンド',
                data: [3,4,2,4,1,4],
                backgroundColor: 'rgba(255,110,90,0.2)',
                borderColor: 'rgb(255,110,90)',
                borderWidth: 3,
                rAxisID: 'r2'
            }
        ],
    }
    const bData = {
        // back-end
        labels: ['Python', 'Go', 'PHP', 'PostgreSQL', 'Firebase/GCP', 'WEB API'],
        datasets: [
            {
                label: 'バックエンド',
                data: [3,2,1,3,3,4],
                backgroundColor: 'rgba(70,210,160,0.2)',
                borderColor: 'rgb(70,210,160)',
                borderWidth: 3,
                rAxisID: 'r2'
            }
        ],
    }
    const dData = {
        // design
        labels: ['Figma', 'Unity/C#', 'Blender', 'MMD', 'Idea', 'Money'],
        datasets: [
            {
                label: 'その他',
                data: [4,2,2,4,4,1],
                backgroundColor: 'rgba(170,110,255,0.2)',
                borderColor: 'rgb(170,110,255)',
                borderWidth: 3,
                rAxisID: 'r2'
            }
        ],
    }
    const options = {
        scales: {
            r2: {
                min: 0,
                max: 5,
                ticks: {
                    showLabelBackdrop: false,
                    stepSize: 1,
                },
            }
        },
    }
    

    return (
        <div id='skills' className='bg-slate-200 w-full'>
            <div className='py-6 md:p-10'>
                <h1 className='flex text-4xl m-6 text-center justify-center'>- MY SKILLs -</h1>
                <p className='flex font-base text-2xl mb-10 px-5 md:px-0 text-center justify-center'>私が今まで身につけたスキルたちをグラフにまとめました。</p>
                <div className='flex flex-row justify-center items-start mb-5'>
                    <div className='RadarCard'>
                        <Radar
                            data={fData}
                            options={options} 
                        />
                        <span className='Gridline'/>
                        <p className='flex font-base text-md text-left justify-center leading-7 tracking-wider'>
                            最初はHTMLとCSS、Javascriptから始め、学校の課題や個人制作でアーティストのファンサイトやランディングページを作っていました。<br/>
                            その後親戚から頂いたレストランのホームページの案件で1～2ヶ月ほどWordPressを触らせていただきました。<br/>
                            現在はNextjsを使いTypeScriptとTailwindCSSを活用してフロントエンド開発をしています。
                        </p>
                    </div>
                    <div className='RadarCard'>
                        <Radar
                            data={bData}
                            options={options} 
                        />
                        <span className='Gridline'/>
                        <p className='flex font-base text-md text-left justify-center leading-7 tracking-wider'>
                            学校の授業でPHPを触ったのが最初でした。個人開発ではバックエンドは勉強不足な部分が多いです。
                        </p>
                    </div>
                    <div className='RadarCard'>
                        <Radar
                            data={dData}
                            options={options} 
                        />
                        <span className='Gridline'/>
                        <p className='flex font-base text-md text-left justify-center leading-7 tracking-wider'>
                            私が今まで身につけたスキルたちをグラフにまとめました。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills