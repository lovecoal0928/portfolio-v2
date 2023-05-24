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
import { motion } from 'framer-motion'


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
        labels: ['PostgreSQL', 'Python', 'Go', 'Firebase/GCP', 'PHP', 'WEB API'],
        datasets: [
            {
                label: 'バックエンド',
                data: [3,3,2,3,1,4],
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
                <div className='flex flex-col xl:flex-row justify-center items-start mb-5'>
                    <motion.div
                        transition={{delay: 0.4}}
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0,
                        transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='RadarCard'>
                        <motion.div
                            transition={{ delay: 0.4 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='flex justify-center mx-auto w-[272px]'>
                            <Radar
                                data={fData}
                                options={options} 
                            />
                        </motion.div>
                        <span className='Gridline mx-0 md:GridlineY xl:Gridline xl:mx-0'/>
                        <motion.p
                            transition={{ delay: 0.4 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='RadarText'>
                            　最初はHTMLとCSS、Javascriptから始め、学校の課題や個人制作でアーティストのファンサイトやランディングページを作っていました。<br/>
                            　その後親戚から頂いたレストランのホームページの案件で1～2ヶ月ほどWordPressを触らせていただきました。<br/>
                            　現在はNextjsを使いTypeScriptとTailwindCSSを活用してフロントエンド開発をしています。
                        </motion.p>
                    </motion.div>
                    <motion.div
                        transition={{delay: 0.2}}
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0,
                        transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='RadarCard'>
                        <motion.div
                            transition={{ delay: 0.4 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='flex justify-center mx-auto w-[272px]'>
                            <Radar
                                data={bData}
                                options={options} 
                            />
                        </motion.div>
                        <span className='Gridline mx-0 md:GridlineY xl:Gridline xl:mx-0'/>
                        <motion.p
                            transition={{ delay: 0.4 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='RadarText'>
                            　学校の授業でPHPを触ったのが最初でした。個人開発ではPythonとDjangoをよく使っていました。<br/>
                            　もっと幅広いWebアプリ制作をするためDjango REST FrameworkでRESTAPIとpostgreSQLを勉強しました。<br/>
                            　最近はGoogleCloudの豊富なAPIライブラリを勉強するためGCPとFirebaseの勉強をしたり、最近業界で流行りのGo言語の勉強をしています。
                        </motion.p>
                    </motion.div>
                    <motion.div
                        transition={{delay: 0.2}}
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0,
                        transition:{type: 'spring', bounce: 0.4, duration: 0.8} }}
                        viewport={{ once: true, amount: 0.8 }}
                        className='RadarCard'>
                        <motion.div
                            transition={{ delay: 0.4 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='flex justify-center mx-auto w-[272px]'>
                            <Radar
                                data={dData}
                                options={options} 
                            />
                        </motion.div>
                        <span className='Gridline mx-0 md:GridlineY xl:Gridline xl:mx-0'/>
                        <motion.p
                            transition={{ delay: 0.4 }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            className='RadarText'>
                            　FigmaとFigjamを使ってアプリの企画設計とデザインを考えるのが好きで、よく使っています。欲を言えばAdobeシリーズのアプリケーションも使ってみたいのですがちょっと高くて買う勇気が出ないです（笑）。<br/>
                            　最近Unityを勉強し始め簡単な3Dゲームを作ったりして遊んでいました。BenderやMMDは昔の趣味の延長線上で触っていましたが最近は動画を作る時間が取れなくて悩んでいます。
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills