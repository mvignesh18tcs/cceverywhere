export interface MediaProviderProps {
    addOnSdk: any;
    children: React.ReactNode;
  }
  
  export interface Image {
    name: string;
    id: string;
    parentFolderId: string;
    url: string;
    updatedDate: Date;
  }
  
  export interface Folder {
    id: string;
    displayName: string;
    parentFolderId: string;
  }
  
  export {};
  declare global {
    interface Window{
      CCEverywhere:any;
    }
  }