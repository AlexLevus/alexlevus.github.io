<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <title>Таблица с отметками студентов</title>
      </head>
      <body>
      <table style="border: 2px solid black; border-collapse: collapse">
        <tr>
            <td style="">
                <div style="text-align: end">Поля (дисциплины):</div>
                <div>Записи (студенты):</div>
            </td>
            <xsl:for-each select="таблица/студент[1]/отметка">
                <td style="border: 2px solid black; width: 120; vertical-align: top; text-align: center;"><xsl:value-of select="@дисциплина" /></td>
            </xsl:for-each>
        </tr>
        <xsl:for-each select="таблица/студент">
            <tr>
                <td style="border: 2px solid black; width: 200"><xsl:value-of select="@имя" /></td>
                <xsl:for-each select="отметка">
                    <td style="border: 1px solid black; background-color: darkgray;"><xsl:value-of select="current()" /></td>
                </xsl:for-each>
            </tr>
        </xsl:for-each>
      </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>