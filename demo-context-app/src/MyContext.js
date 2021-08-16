import React from 'react';

const myContext = React.createContext();
const RootProvider = myContext.Provider;
const  ChildConsumer = myContext.Consumer;

export {RootProvider,ChildConsumer}