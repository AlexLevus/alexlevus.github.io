<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html lang="en">
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>Фигуры</title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="графика">
        <svg height="{@высота}" width="{@ширина}">
            <xsl:apply-templates/>
        </svg>
    </xsl:template>

    <xsl:template match="эллипс">
        <ellipse cx="{@cx}" cy="{@cy}" rx="{@rx}" ry="{@ry}" style="fill: {@заливка}; stroke: {@ободок}; stroke-width: {@ширина-ободка}">
            <xsl:apply-templates/>
        </ellipse>
    </xsl:template>
</xsl:stylesheet>