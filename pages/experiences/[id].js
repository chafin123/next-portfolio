import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import experiences from '../../shared/experiences.json'
import styles from '../../styles/[id].module.css'
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export const getStaticPaths = async () => {
    const data =  experiences.experiences;

    const paths = data.map(path => {
        return {
            params: {id: path.id.toString()}
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = (context) => {
    const id = context.params.id;
    const data = experiences.experiences.filter(item => id.includes(item.id))
    return {
        props: {experiences: data[0]}
    }
}

const Experience = ({experiences}) => {
   return ( 
    <div className='max-w-[1440px] justify-center items-center text-center py-2'>
        <div className='flex mx-auto w-fit my-4'>
            <div className='pt-3 pr-5'>
                <Link href="/">
                    <FontAwesomeIcon icon={faBackward}/>
                </Link>
            </div>
            <div>
                <h1 className='text-5xl mr-5'>{experiences.name}</h1>
            </div>
        </div>
        <div className={styles.imageWrapper}>
            <Image 
                src={experiences.image}
                alt={experiences.name}
                layout="intrinsic"
                height={800}
                width={800}
            />
        </div>
        <div className='w-10/12 lg:max-w-8/12 mx-auto'>
            <p>{experiences.writeup}</p>
        </div>
        <div className='flex justify-center mt-4'>
            {experiences.skills.map((tech, index) => {
                return (
                    <div 
                        key={index}
                        className="border border-transparent rounded-3xl text-xs px-2 mx-1 my-1 w-fit text-gray-600 bg-teal-400"
                    >
                        {tech}
                    </div>
                )
            })}
        </div>
    </div>
   )
}
export default Experience

