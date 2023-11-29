---
title: API Reference
description: Felicity API Routing and Documentation
---

:::caution
Felicity is in constant development, so bug reports and feature suggestions are welcome!
:::

This document provides an overview of the endpoints available in the Felicity API.

## Base URL

All API requests should be made to the following base URL:

```
https://api.tryfelicity.one
```

## Manifest Route

Used internally to retrieve the latest D2 manifest version.

```
GET /manifest
```

## Status Route

Used internally to retrieve the current service status, including Bungie API availability.

```
GET /status
```

## Task Route

Get the list of tasks and their last run time.

```
GET /tasks
```

## Vendor Route

Get the list of vendor sales and their last update time.

### Get Weapon Sales

For all weapon sales:

```
GET /vendor/getWeapons
```

For only weapon sales that are currently available for purchase/redeem:

```
GET /vendor/getAvailableWeapons
```

### Current Nightfall Weapon

```
GET /vendor/getNightfallWeapon
```

### Current Trials Weapon

If Trials is active, returns the current Trials weapon. Otherwise, returns an item ID '0'.

```
GET /vendor/getTrialsWeapon
```

## Response Format

All responses are returned in JSON format.

```json
{
    "ErrorCode": integer,
    "ErrorStatus": string,
    "Message": string,
    "Response": array(object)
}
```

