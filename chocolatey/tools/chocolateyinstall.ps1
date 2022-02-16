$ErrorActionPreference = 'Stop';
$toolsDir   = "$(Split-Path -parent $MyInvocation.MyCommand.Definition)"
$url64      = 'https://github.com/hyperjumptech/monika/releases/download/v1.6.11/monika-v1.6.11-win-x64.zip'

$packageArgs = @{
  packageName   = 'monika'
  unzipLocation = $toolsDir
  url64bit      = $url64
  checksum64    = 'DAA2C74C2665D82D5634ED7E6C1A6FEC2866D02A2F7FAF84A795EA9E0A317A66'
  checksumType64= 'sha256'
}

Install-ChocolateyZipPackage @packageArgs