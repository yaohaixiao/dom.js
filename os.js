/**
 * 检测当前操作系统信息，返回操作名称合版本信息
 * ========================================================================
 * @method os
 * @see https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-details-using-javascript
 * @return {{name: string, version: string}}
 */
const os = () => {
  const PLATFORMS = [
    {
      name: 'Windows 10',
      pattern: /(Windows (NT)? 10.0)/
    },
    {
      name: 'Windows 8.1',
      pattern: /(Windows 8.1|Windows NT 6.3)/
    },
    {
      name: 'Windows 8',
      pattern: /(Windows 8|Windows NT 6.2)/
    },
    {
      name: 'Windows 7',
      pattern: /(Windows 7|Windows NT 6.1)/
    },
    {
      name: 'Windows Vista',
      pattern: /Windows NT 6.0/
    },
    {
      name: 'Windows Server 2003',
      pattern: /Windows NT 5.2/
    },
    {
      name: 'Windows XP',
      pattern: /(Windows NT 5.1|Windows XP)/
    },
    {
      name: 'Windows 2000',
      pattern: /(Windows NT 5.0|Windows 2000)/
    },
    {
      name: 'Windows ME',
      pattern: /(Win 9x 4.90|Windows ME)/
    },
    {
      name: 'Windows 98',
      pattern: /(Windows 98|Win98)/
    },
    {
      name: 'Windows 95',
      pattern: /(Windows 95|Win95|Windows_95)/
    },
    {
      name: 'Windows NT 4.0',
      pattern: /(Windows (NT)? 4.0|WinNT4.0|WinNT)/
    },
    {
      name: 'Windows CE',
      pattern: /Windows CE/
    },
    {
      name: 'Windows 3.11',
      pattern: /Win16/
    },
    {
      name: 'Android',
      pattern: /Android/
    },
    {
      name: 'Open BSD',
      pattern: /OpenBSD/
    },
    {
      name: 'Sun OS',
      pattern: /SunOS/
    },
    {
      name: 'Linux',
      pattern: /(Linux|X11)/
    },
    {
      name: 'iOS',
      pattern: /(iPhone|iPad|iPod)/
    },
    {
      name: 'Mac OS X',
      pattern: /Mac OS X/
    },
    {
      name: 'Mac OS',
      pattern: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    },
    {
      name: 'QNX',
      pattern: /QNX/
    },
    {
      name: 'UNIX',
      pattern: /UNIX/
    },
    {
      name: 'BeOS',
      pattern: /BeOS/
    },
    {
      name: 'OS/2',
      pattern: /OS\/2/
    },
    {
      name: 'Search Bot',
      pattern:
        /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }
  ]
  const ua = navigator.userAgent
  let name = 'unknown'
  let version = '--'
  let match

  match = PLATFORMS.find((platform) => platform.pattern.test(ua))

  if (match) {
    name = match.name
  }

  if (/Windows/.test(name)) {
    version = /Windows (.*)/.exec(name)[1]
    name = 'Windows'
  }

  switch (name) {
    case 'Mac OS X':
      version = /Mac OS X (1\d[._\d]+)/.exec(ua)[1]
      break

    case 'Android':
      version = /Android ([._\d]+)/.exec(ua)[1]
      break

    case 'iOS':
      version = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator.appVersion)
      version = version[1] + '.' + version[2] + '.' + (version[3] | 0)
      break
  }

  return {
    name,
    version
  }
}

export default os
