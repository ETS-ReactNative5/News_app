import {articles_url, _api_key, category, country_code} from '../config/rest_consfig';

export async function getArticles(categ){
    try{
        let articles = await fetch(`${articles_url}?country=${country_code}&category=${categ}`,
            {headers :{'X-API-KEY':_api_key}});
        
        let result = await  articles.json();
        articles = null;

        return result.articles;
        
    }
    catch (e) {
        throw e;
    }
}