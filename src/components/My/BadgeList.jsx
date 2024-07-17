import badgeImg from '../assets/images/badge-test-img.png'
import Badge from './Badge.jsx'

const BadgeList = () => {
    // {title, content, img, size="medium"}
    // TODO: test이므로 실제 데이터로 변환 필요.
    let test = [1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <section className="badge">
            <ol className='grid grid-cols-4 gap-y-6 w-full m-auto'>
                {
                    test.map((item)=>(
                        <li key={item}>
                            <Badge title="오늘의 수영왕" content="200m 달성" img={badgeImg}/>
                        </li>
                    ))
                }
            </ol>
        </section>
    )
}
export default BadgeList;