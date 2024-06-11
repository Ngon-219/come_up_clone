import React, { createContext} from 'react';

const sampleData = [
  {code: "1", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "2", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "3", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "4", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "5", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "6", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "7", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "8", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "9", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "10", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "11", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "12", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "13", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "14", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "15", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "16", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "17", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "18", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "19", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "20", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "21", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
  {code: "22", name: "https://i.ytimg.com/vi/5iAIVtPHMmw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-DoACuAiKAgwIABABGGUgVChIMA8=&rs=AOn4CLDQDKmWi3fNakpjL7RLdobRGuiRZg", description: "first"},
  {code: "23", name: "https://uiuiui.in/uploads/posts/2022-11/1661380704-968023e42199504c2f0c07c7f34a092f.webp", description: "second"},
  {code: "24", name: "https://wallpapercave.com/wp/wp9748820.jpg", description: "second"},
]

// Tạo context
export const SampleContext = createContext(sampleData);

const SampleProvider:React.FC<any> = ({children}) => {
  
    return (
      <SampleContext.Provider value={sampleData}>
        {children}
      </SampleContext.Provider>
    );
  };

  
export default SampleContext;
