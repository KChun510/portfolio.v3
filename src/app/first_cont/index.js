'use client'
import './first_cont.css';
import { useQuery } from 'react-query';
import { pullGitInfo } from '../actions';
import dynamic from 'next/dynamic';
import RepoButton from './components/repoButton';
import { useEffect } from 'react';

const WorkShowcase = dynamic(() => import('./components/work_showcase'), {
    ssr: false, // disables server-side rendering for this component
});

const FirstCont = ({ id }) => {

    const { data: repos, isLoading } = useQuery({
        queryKey: ['repoData'],
        queryFn: async () => await pullGitInfo()
    });

    console.log(repos)

    useEffect(() => {
        if (!isLoading) {
            console.error("Logging from first cont")
            console.log(repos)
        }
    }, [repos, isLoading])

    return (
        <div id={id}>
            <h1 className="text-6xl font-bold ml-7">Projects</h1>
            <div className="flex flex-col lg:flex-row flex-wrap mt-1 ml-2 min-h-[75vh]">
                <WorkShowcase />
                <div className="w-full lg:w-1/2 px-4 ">
                    <div className="px-auto">
                        <h5 className="text-3xl font-semibold ml-1">Public Repositorys</h5>
                    </div>
                    <div className="gh_repos overflow-auto w-full border-1 border-black rounded">
                        <div>
                            {repos ? repos.map(({ name, des, url, lang }) => <RepoButton key={name} name={name} des={des} url={url} lang={lang} />) : null}
                        </div>
                    </div>
                    <div className="text-sm text-center w-full">
                        <small>{isLoading ? <b>Loading Public Repos...</b> : <b>Count: {repos.length} </b>}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FirstCont;

