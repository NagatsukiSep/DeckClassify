import React, { useEffect } from 'react';
import Papa from 'papaparse';
import { Classify } from '../../../utils/Classify';
import { BasicButton } from '../../ui/Button';
import { DeckCard } from '../../ui/DeckCard';

interface CSVRow {
  [key: string]: string;
}

export const Top = () => {
  // const codes = [
  //   "Fk5fFk-P1mhA0-5vbfvF",
  //   "PgQLnL-mXh5oJ-gHQQgg",
  //   "pMMp22-1XYzpI-2MUXyy",
  //   "pMMp22-1XYzpI-2MUXyy",
  // ];
  const [csvData, setCsvData] = React.useState<CSVRow[]>([]);
  const [deckCodes, setDeckCodes] = React.useState<string[]>([]);
  const addDeckCode = (code: string[]) => {
    setDeckCodes([...deckCodes, ...code]);
  }
  // const [column, setColumn] = React.useState<string>('デッキコード');


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          const data = results.data as CSVRow[];
          setCsvData(data);
        },
      });
    }
  };

  const handleOnClick = () => {
    extractSelectedColumns(csvData, ["デッキコード1", "デッキコード2", "デッキコード3"]);
  }

  const extractSelectedColumns = (data: CSVRow[], columns: string[]) => {
    // useEffectに敗北してる感あるけど一旦tmpにデッキコードを格納している
    let tmp: string[] = [];
    for (const column of columns) {
      if (!data[0][column]) {
        setError(`Column ${column} not found`);
        return;
      }
      const extractedData = data.map((row) => row[column]);
      tmp = [...tmp, ...extractedData];
    }
    addDeckCode(tmp);
  };


  type dataType = {
    id: number,
    code: string,
    deckType: string
  }

  const [error, setError] = React.useState<string | null>(null);
  const [data, setData] = React.useState<dataType[]>([]);
  const [freq, setFreq] = React.useState<{ [deckType: string]: number }>({});
  const [total, setTotal] = React.useState<number>(0);

  useEffect(() => {
    const classifyCodesSequentially = async () => {
      const newFreq: { [deckType: string]: number } = {};
      const newData: { id: number, code: string, deckType: string }[] = [];
      for (const code of deckCodes) {
        try {
          const res = await Classify(code);
          if (newFreq[res]) {
            newFreq[res] += 1;
          } else {
            newFreq[res] = 1;
          }
          setTotal((prevTotal) => prevTotal + 1);
          newData.push({ id: newData.length, code, deckType: res });
        } catch (e) {
          setError("Error occurred while classifying codes");
        }
      }
      setFreq((prevFreq) => ({ ...prevFreq, ...newFreq }));
      //freqをソートする
      const sortable = Object.entries(newFreq);
      sortable.sort((a, b) => b[1] - a[1]);
      const sortedFreq: { [deckType: string]: number } = {};
      sortable.forEach(([key, value]) => {
        sortedFreq[key] = value;
      });
      setFreq(sortedFreq);
      setData(newData);
    };

    classifyCodesSequentially();
  }, [deckCodes]);


  return (
    <div className="px-16 pt-8">
      <div className="text-2xl font-bold">Decklassify</div>
      <div className="font-m-plus-1p">
        ここにcsvファイルをアップロードしてください
      </div>
      <div className="font-m-plus-1p">
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>
      <BasicButton onClick={handleOnClick}>集計</BasicButton>
      <div className="h-[1px] bg-black w-full px-3" />
      <div>
        {error && <p>{error}</p>}
        <div className="grid grid-cols-3 gap-4 px-8 py-4">
          {data.map((d) => (
            <DeckCard key={d.id} deckCode={d.code} deckType={d.deckType} />
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-black w-full px-3" />
      <div className="py-2">
        {/* {Object.keys(freq).map((deckType) => (
          <li key={deckType}>
            <strong>{deckType}</strong>: {freq[deckType]}
          </li>
        ))} */}
        <table
          className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr><th scope="col" className="px-6 py-4"></th>
              <th scope="col" className="px-6 py-4">デッキタイプ</th>
              <th scope="col" className="px-6 py-4">数</th>
              <th scope="col" className="px-6 py-4">割合</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(freq).map((deckType) => (
              <tr key={deckType} className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{Object.keys(freq).indexOf(deckType) + 1}</td>
                <td className="whitespace-nowrap px-6 py-4">{deckType}</td>
                <td className="whitespace-nowrap px-6 py-4">{freq[deckType]}</td>
                <td className="whitespace-nowrap px-6 py-4">{(freq[deckType] / total * 100).toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

