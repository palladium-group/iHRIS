<?xml version="1.0" encoding="UTF-8"?>
<sch:schema xmlns:sch="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <sch:ns prefix="f" uri="http://hl7.org/fhir"/>
  <sch:ns prefix="h" uri="http://www.w3.org/1999/xhtml"/>
  <!-- 
    This file contains just the constraints for the profile Basic
    It includes the base constraints for the resource as well.
    Because of the way that schematrons and containment work, 
    you may need to use this schematron fragment to build a, 
    single schematron that validates contained resources (if you have any) 
  -->
  <sch:pattern>
    <sch:title>f:Basic</sch:title>
    <sch:rule context="f:Basic">
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-basic-name']) &gt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-basic-name': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-basic-name']) &lt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-basic-name': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-dataset']) &gt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-dataset': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-dataset']) &lt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-dataset': maximum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-categories']) &gt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-categories': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-series']) &gt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-series': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-permissions']) &gt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-permissions': minimum cardinality of 'extension' is 1</sch:assert>
      <sch:assert test="count(f:extension[@url = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-permissions']) &lt;= 1">extension with URL = 'http://ihris.org/fhir/StructureDefinition/ihris-visualization-permissions': maximum cardinality of 'extension' is 1</sch:assert>
    </sch:rule>
  </sch:pattern>
</sch:schema>
