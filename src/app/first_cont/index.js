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
        <div id={id}>
            <h1 className="text-6xl font-bold ml-7">Projects</h1>
            <div className="flex flex-col lg:flex-row flex-wrap mt-1 ml-2 min-h-[75vh]">
                <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                    <h6 className="text-3xl font-semibold ml-1">Live builds & diagrams </h6>
                    <div id='video' className="aspect-w-16 aspect-h-9 rounded shadow border-4 border-black">
                        <iframe
                            title='my_video'
                            src="https://drive.google.com/file/d/1ylyMX7dNSRdGZ4AtAJ6ucKKws4FhTnG4/preview"
                            allowFullScreen
                            style={{ width: '100%', height: '100%', border: 'none' }}
                        ></iframe>
                    </div>
                    <div className="text-sm ml-2">
                        <small>{<b> Uploaded: 06/01/2020  </b>}</small>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 px-4 ">
                    <div className="px-auto">
                        <h5 className="text-3xl font-semibold ml-1">Public Repositorys</h5>
                    </div>
                    <div className="gh_repos overflow-auto w-full border-2 border-black rounded">
                        <div>
                            {repos ? repos.map(({ name, des, url, lang }) => <RepoButton key={name} name={name} des={des} url={url} lang={lang} />) : null}
                        </div>
                    </div>
                    <div className="text-sm ml-4">
                        <small>{isLoading ? <b>Loading Public Repos...</b> : <b> Count: {repos.length} </b>}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FirstCont;

