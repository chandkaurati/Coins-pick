import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Article } from "../pages/home";

interface NewsCardProps {
  article: Article;
}

function NewsCard({ article }: NewsCardProps) { 
  return (
    <div>
      <Card className="transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-gray-800 hover:scale-105 hover:-rotate-1">
        <CardHeader>
          <CardTitle className="text-[1.2em]">{article.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 items-center">
            {/* <img className="w-80" src={article.urlToImage} alt="" /> */}
            <p className="text-[0.9em]">
              {article.content}{" "}
              <a
                className="text-blue-500 cursor-pointer hover:text-blue-300"
                target="_blank"
                href={article.url}
              >
                Read more
              </a>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-6 text-gray-400">
        <p>{article.author} </p>{" "}
        <p>{new Date(article.publishedAt).toLocaleDateString()}</p>{" "}
        </CardFooter>
      </Card>
    </div>
  );
}

export default NewsCard;
