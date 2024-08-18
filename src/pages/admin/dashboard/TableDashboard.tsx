import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TArticles, TPortfolio } from "@/lib/models";

interface Props {
  dataArticles: TArticles[] | undefined;
  dataPortfolio: TPortfolio[] | undefined;
}

const TableDashboard: React.FC<Props> = ({ dataArticles, dataPortfolio }) => {
  return (
    <div className="flex gap-2">
      <div className="rounded-md p-4 bg-white w-1/2">
        <Table>
          <TableCaption>{`${
            dataArticles ? "A list of Articles." : "Data tidak ditemukan"
          }`}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm">ID</TableHead>
              <TableHead className="text-sm">Title</TableHead>
              <TableHead className="text-sm">Descriptions</TableHead>
              <TableHead className="text-sm">View</TableHead>
              <TableHead className="text-sm">Kategori</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataArticles &&
              dataArticles.slice(0, 3).map((article) => (
                <TableRow key={article.id_article}>
                  <TableCell className="text-sm">
                    {article.id_article}
                  </TableCell>
                  <TableCell className="text-sm">
                    <p className="line-clamp-2">{article.title}</p>
                  </TableCell>
                  <TableCell className="text-sm">
                    <div
                      className="line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                  </TableCell>
                  <TableCell className="text-sm">
                    {article.view_count}
                  </TableCell>
                  <TableCell className="text-sm">
                    {article.categories.name_categori}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="rounded-md p-4 bg-white w-1/2">
        <Table>
          <TableCaption>{`${
            dataPortfolio ? "A list of Portfolio." : "Data tidak ditemukan"
          }`}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm">ID</TableHead>
              <TableHead className="text-sm">Image</TableHead>
              <TableHead className="text-sm">Title</TableHead>
              <TableHead className="text-sm">Descriptions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataPortfolio &&
              dataPortfolio.slice(0, 3).map((porto) => (
                <TableRow key={porto.id_portofolio}>
                  <TableCell className="text-sm">
                    {porto.id_portofolio}
                  </TableCell>
                  <TableCell className="text-sm">
                    <img
                      src={porto.image}
                      alt={`gambar-${porto.title}`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </TableCell>
                  <TableCell className="text-sm">
                    <p className="line-clamp-2">{porto.title}</p>
                  </TableCell>
                  <TableCell className="text-sm">
                    <p className="line-clamp-2">{porto.description}</p>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableDashboard;
