function domainName(url){
  return /(?:https?:\/\/)?(?:www\.)?([^./]+)\./.exec(url)[1];
}
