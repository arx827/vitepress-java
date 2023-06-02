---
title: 1. Spring Boot 介紹
---

# 1. Spring Boot 介紹
## Spring Boot 介紹 - 1
  - `Spring Boot` 是由 Pivotal 團隊在 2013 年開始研發，2014 年 4 月發布第一個版本。所以它是一個新型的框架。
  - 它基於 Spring4.0 設計(以及之後的 5.0)，不僅繼承了 Spring 框架原有的優秀特性，而且還透過簡化配置來進一步簡化了 Spring 應用的整個搭建和開發過程。
  - `Spring Boot` 透過集成大量的框架使得依賴套件的版本一致，解決了多套件不同版本間衝突的問題。
  - [官網文件](https://spring.io/projects/spring-boot)

## Spring Boot 介紹 - 2
  - `Spring Boot` 也內建了 `Tomcat`，讓開發者不用擔心 Web 容器的環境問題。
  - 絕大多數的 `Spring Boot` 應用系統只需編寫非常少量的組態檔，就可以完成組態設定的工作，系統開發人員可更加專注於業務邏輯的編寫。

## Spring Boot 介紹 - 3
  - `Boot` 有啟動的意思，為了讓開發者能夠快速開啟一個 `Spring 專案`，`Spring Boot` 幫開發者簡化了許多整合套件的設定。
  - 可以整合 `Spring`、`Spring Data`、`Spring MVC`、`Spring Cloud`、...或其他多人使用的第三方套件等專案。
  - 簡而言之，`Spring Boot` 只是一個整合工具，開發者還是要先學會 `Spring`、`Spring MVC` 的原理和內容。
  - `Spring Boot` 目前(2022/11)的穩定版本為 3.0.5
  - 詳情可見 [Spring 官方網站](https://spring.io)

## Spring Boot 的特性
  - Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".
  - 使用 `Spring Boot` 可輕鬆地完成獨立的、可用於企業營運級別 (production-grade) 的 `Spring 應用系統`，您可以直接執行它。
  - ### 特性：
    - 基於約定優於配置 (convention over configuration) 的精神，提供非常多的 [預設配置](https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html#appendix.application-properties) 作為應用系統的預設值。若有需要也可以自行設定 (Override) 預設值。
    - 依專案需要的功能來挑選適當的 `Starter` 就可使用預設配置
    - 快速自動設定的功能 (Auto-Config)