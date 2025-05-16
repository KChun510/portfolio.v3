'use client'
import './first_cont.css';
import { pullGitInfo } from '../actions';
import RepoButton from './components/repoButton';
import { useQuery } from 'react-query';

const FirstCont = ({ id }) => {
    const { data: repos, isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => await pullGitInfo()
    });

    return (
        <div id={id} >
            <div className="flex flex-wrap mt-1 mx-4 min-h-[75vh]">
                <div className="lg:flex-1 px-auto">
                    <h1 className="text-6xl font-bold">Kyle Chun</h1>
                    <h6 className="text-2xl font-semibold">Computer Science Student</h6>
                    <div id='video' className="aspect-w-16 aspect-h-9 rounded shadow border-4 border-black">
                        <iframe
                            title='my_video'
                            src="https://drive.google.com/file/d/1ylyMX7dNSRdGZ4AtAJ6ucKKws4FhTnG4/preview"
                            allowFullScreen
                            style={{ width: '100%', height: '100%', border: 'none' }}
                        ></iframe>
                    </div>
                    <div className="text-sm">
                        <small>{<b> Uploaded: 06/01/2020  </b>}</small>
                    </div>
                </div>

                <div className="md:flex-1 mt-5 px-5">
                    <div className="container mt-5 px-auto">
                        <h5 className="text-3xl font-semibold">Projects</h5>
                    </div>
                    <div className="passion overflow-auto w-full ml-3 border-2 border-black rounded">
                        <div className="list-group border-black" id='appending_repos' >
                            {repos ? repos.map(({ name, des, url, lang }) => <RepoButton className="outline-2 outline-offset-2 outline-solid" key={name} name={name} des={des} url={url} lang={lang} />) : null}
                        </div>
                    </div>
                    <div className="text-sm mr-10">
                        <small>{isLoading ? <b>Loading Public Projects...</b> : <b> Public Project Count: {repos.length} </b>}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FirstCont;

