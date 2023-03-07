import React from 'react';
import packageJson from '../../package.json';
const appVersion:string = packageJson.version;

/************
 * 
 * FOYDALANUVCHIDA Cache ni YANGILASH UCHUN /public/meta.json file da yangilash lozim
 * 
 * 
 * 
 */

// version from response - first param, local version second param
const semverGreaterThan = (versionA:any, versionB:any) => {
  const versionsA = versionA.split(/\./g);
  const versionsB = versionB.split(/\./g);
  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

class CacheBuster extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.state = {
      loading: true,
      isLatestVersion: false,
      text: '',
      refreshCacheAndReload: () => {
        console.log('Clearing cache and hard reloading...')
        if (caches) {
          // Service worker cache should be cleared with caches.delete()
          caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
          });
          localStorage.clear();
          sessionStorage.clear();
          window.location.reload();
        }
      }
    };
  }

  componentDidMount() {
    fetch('/meta.json')
      .then((response) => response.json())
      .then((meta) => {
        const latestVersion = meta.version;
        const currentVersion = appVersion;

        const shouldForceRefresh = semverGreaterThan(latestVersion, currentVersion);
        if (shouldForceRefresh) {
          console.log(`We have a new version - ${latestVersion}. Should force refresh. Yor bundle version is ${currentVersion}.`);
          this.setState({ loading: false, isLatestVersion: false, text: `${latestVersion}` });

        } else {
          console.log(`You already have the latest version - ${latestVersion}. No cache refresh needed.`);
          this.setState({ loading: false, isLatestVersion: true, text: `We have a new version - ${latestVersion}. Should force refresh`});
        }
      });
  }
  render() {
    const { loading, isLatestVersion, refreshCacheAndReload, text }:any = this.state;
    return this.props.children({ loading, isLatestVersion, refreshCacheAndReload, text });
  }
}

export default CacheBuster;